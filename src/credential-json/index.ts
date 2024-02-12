// https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_json
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialJsonConfig extends cdktf.TerraformMetaArguments {
  /**
  * The credential store in which to save this json credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_json#credential_store_id CredentialJson#credential_store_id}
  */
  readonly credentialStoreId: string;
  /**
  * The description of this json credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_json#description CredentialJson#description}
  */
  readonly description?: string;
  /**
  * The name of this json credential. Defaults to the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_json#name CredentialJson#name}
  */
  readonly name?: string;
  /**
  * The object for the this json credential. Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_json#object CredentialJson#object}
  */
  readonly object: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_json boundary_credential_json}
*/
export class CredentialJson extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_credential_json";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialJson resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialJson to import
  * @param importFromId The id of the existing CredentialJson that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_json#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialJson to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "boundary_credential_json", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_json boundary_credential_json} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialJsonConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialJsonConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_credential_json',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.13',
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
    this._credentialStoreId = config.credentialStoreId;
    this._description = config.description;
    this._name = config.name;
    this._object = config.object;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // object_hmac - computed: true, optional: false, required: false
  public get objectHmac() {
    return this.getStringAttribute('object_hmac');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_store_id: cdktf.stringToTerraform(this._credentialStoreId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      object: cdktf.stringToTerraform(this._object),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_store_id: {
        value: cdktf.stringToHclTerraform(this._credentialStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object: {
        value: cdktf.stringToHclTerraform(this._object),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
