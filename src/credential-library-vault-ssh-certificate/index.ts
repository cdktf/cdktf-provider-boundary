// https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialLibraryVaultSshCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Principals to be signed as "valid_principles" in addition to username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate#additional_valid_principals CredentialLibraryVaultSshCertificate#additional_valid_principals}
  */
  readonly additionalValidPrincipals?: string[];
  /**
  * The ID of the credential store that this library belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate#credential_store_id CredentialLibraryVaultSshCertificate#credential_store_id}
  */
  readonly credentialStoreId: string;
  /**
  * Specifies a map of the critical options that the certificate should be signed for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate#critical_options CredentialLibraryVaultSshCertificate#critical_options}
  */
  readonly criticalOptions?: { [key: string]: string };
  /**
  * The Vault credential library description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate#description CredentialLibraryVaultSshCertificate#description}
  */
  readonly description?: string;
  /**
  * Specifies a map of the extensions that the certificate should be signed for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate#extensions CredentialLibraryVaultSshCertificate#extensions}
  */
  readonly extensions?: { [key: string]: string };
  /**
  * Specifies the number of bits to use for the generated keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate#key_bits CredentialLibraryVaultSshCertificate#key_bits}
  */
  readonly keyBits?: number;
  /**
  * Specifies the key id a certificate should have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate#key_id CredentialLibraryVaultSshCertificate#key_id}
  */
  readonly keyId?: string;
  /**
  * Specifies the desired key type; must be ed25519, ecdsa, or rsa.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate#key_type CredentialLibraryVaultSshCertificate#key_type}
  */
  readonly keyType?: string;
  /**
  * The Vault credential library name. Defaults to the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate#name CredentialLibraryVaultSshCertificate#name}
  */
  readonly name?: string;
  /**
  * The path in Vault to request credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate#path CredentialLibraryVaultSshCertificate#path}
  */
  readonly path: string;
  /**
  * Specifies the requested time to live for a certificate returned from the library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate#ttl CredentialLibraryVaultSshCertificate#ttl}
  */
  readonly ttl?: string;
  /**
  * The username to use with the certificate returned by the library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate#username CredentialLibraryVaultSshCertificate#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate boundary_credential_library_vault_ssh_certificate}
*/
export class CredentialLibraryVaultSshCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_credential_library_vault_ssh_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialLibraryVaultSshCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialLibraryVaultSshCertificate to import
  * @param importFromId The id of the existing CredentialLibraryVaultSshCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialLibraryVaultSshCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "boundary_credential_library_vault_ssh_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_library_vault_ssh_certificate boundary_credential_library_vault_ssh_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialLibraryVaultSshCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialLibraryVaultSshCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_credential_library_vault_ssh_certificate',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.12',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalValidPrincipals = config.additionalValidPrincipals;
    this._credentialStoreId = config.credentialStoreId;
    this._criticalOptions = config.criticalOptions;
    this._description = config.description;
    this._extensions = config.extensions;
    this._keyBits = config.keyBits;
    this._keyId = config.keyId;
    this._keyType = config.keyType;
    this._name = config.name;
    this._path = config.path;
    this._ttl = config.ttl;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_valid_principals - computed: false, optional: true, required: false
  private _additionalValidPrincipals?: string[]; 
  public get additionalValidPrincipals() {
    return this.getListAttribute('additional_valid_principals');
  }
  public set additionalValidPrincipals(value: string[]) {
    this._additionalValidPrincipals = value;
  }
  public resetAdditionalValidPrincipals() {
    this._additionalValidPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalValidPrincipalsInput() {
    return this._additionalValidPrincipals;
  }

  // credential_store_id - computed: false, optional: false, required: true
  private _credentialStoreId?: string; 
  public get credentialStoreId() {
    return this.getStringAttribute('credential_store_id');
  }
  public set credentialStoreId(value: string) {
    this._credentialStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialStoreIdInput() {
    return this._credentialStoreId;
  }

  // critical_options - computed: false, optional: true, required: false
  private _criticalOptions?: { [key: string]: string }; 
  public get criticalOptions() {
    return this.getStringMapAttribute('critical_options');
  }
  public set criticalOptions(value: { [key: string]: string }) {
    this._criticalOptions = value;
  }
  public resetCriticalOptions() {
    this._criticalOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalOptionsInput() {
    return this._criticalOptions;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions?: { [key: string]: string }; 
  public get extensions() {
    return this.getStringMapAttribute('extensions');
  }
  public set extensions(value: { [key: string]: string }) {
    this._extensions = value;
  }
  public resetExtensions() {
    this._extensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_bits - computed: false, optional: true, required: false
  private _keyBits?: number; 
  public get keyBits() {
    return this.getNumberAttribute('key_bits');
  }
  public set keyBits(value: number) {
    this._keyBits = value;
  }
  public resetKeyBits() {
    this._keyBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyBitsInput() {
    return this._keyBits;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_valid_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalValidPrincipals),
      credential_store_id: cdktf.stringToTerraform(this._credentialStoreId),
      critical_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._criticalOptions),
      description: cdktf.stringToTerraform(this._description),
      extensions: cdktf.hashMapper(cdktf.stringToTerraform)(this._extensions),
      key_bits: cdktf.numberToTerraform(this._keyBits),
      key_id: cdktf.stringToTerraform(this._keyId),
      key_type: cdktf.stringToTerraform(this._keyType),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      ttl: cdktf.stringToTerraform(this._ttl),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
