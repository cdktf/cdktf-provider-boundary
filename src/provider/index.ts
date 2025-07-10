/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BoundaryProviderConfig {
  /**
  * The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs#addr BoundaryProvider#addr}
  */
  readonly addr: string;
  /**
  * The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs#auth_method_id BoundaryProvider#auth_method_id}
  */
  readonly authMethodId?: string;
  /**
  * The auth method login name for password-style or ldap-style auth methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs#auth_method_login_name BoundaryProvider#auth_method_login_name}
  */
  readonly authMethodLoginName?: string;
  /**
  * The auth method password for password-style or ldap-style auth methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs#auth_method_password BoundaryProvider#auth_method_password}
  */
  readonly authMethodPassword?: string;
  /**
  * The auth method login name for password-style auth methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs#password_auth_method_login_name BoundaryProvider#password_auth_method_login_name}
  */
  readonly passwordAuthMethodLoginName?: string;
  /**
  * The auth method password for password-style auth methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs#password_auth_method_password BoundaryProvider#password_auth_method_password}
  */
  readonly passwordAuthMethodPassword?: string;
  /**
  * Specifies a directory that the Boundary provider can use to write and execute its built-in plugins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs#plugin_execution_dir BoundaryProvider#plugin_execution_dir}
  */
  readonly pluginExecutionDir?: string;
  /**
  * Can be a heredoc string or a path on disk. If set, the string/file will be parsed as HCL and used with the recovery KMS mechanism. While this is set, it will override any other authentication information; the KMS mechanism will always be used. See Boundary's KMS docs for examples: https://boundaryproject.io/docs/configuration/kms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs#recovery_kms_hcl BoundaryProvider#recovery_kms_hcl}
  */
  readonly recoveryKmsHcl?: string;
  /**
  * The scope ID for the default auth method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs#scope_id BoundaryProvider#scope_id}
  */
  readonly scopeId?: string;
  /**
  * When set to true, does not validate the Boundary API endpoint certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs#tls_insecure BoundaryProvider#tls_insecure}
  */
  readonly tlsInsecure?: boolean | cdktf.IResolvable;
  /**
  * The Boundary token to use, as a string or path on disk containing just the string. If set, the token read here will be used in place of authenticating with the auth method specified in "auth_method_id", although the recovery KMS mechanism will still override this. Can also be set with the BOUNDARY_TOKEN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs#token BoundaryProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs#alias BoundaryProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs boundary}
*/
export class BoundaryProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BoundaryProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BoundaryProvider to import
  * @param importFromId The id of the existing BoundaryProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BoundaryProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "boundary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs boundary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BoundaryProviderConfig
  */
  public constructor(scope: Construct, id: string, config: BoundaryProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.3.0',
        providerVersionConstraint: '~> 1.0'
      },
      terraformProviderSource: 'boundary'
    });
    this._addr = config.addr;
    this._authMethodId = config.authMethodId;
    this._authMethodLoginName = config.authMethodLoginName;
    this._authMethodPassword = config.authMethodPassword;
    this._passwordAuthMethodLoginName = config.passwordAuthMethodLoginName;
    this._passwordAuthMethodPassword = config.passwordAuthMethodPassword;
    this._pluginExecutionDir = config.pluginExecutionDir;
    this._recoveryKmsHcl = config.recoveryKmsHcl;
    this._scopeId = config.scopeId;
    this._tlsInsecure = config.tlsInsecure;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this._addr;
  }
  public set addr(value: string | undefined) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // auth_method_id - computed: false, optional: true, required: false
  private _authMethodId?: string; 
  public get authMethodId() {
    return this._authMethodId;
  }
  public set authMethodId(value: string | undefined) {
    this._authMethodId = value;
  }
  public resetAuthMethodId() {
    this._authMethodId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodIdInput() {
    return this._authMethodId;
  }

  // auth_method_login_name - computed: false, optional: true, required: false
  private _authMethodLoginName?: string; 
  public get authMethodLoginName() {
    return this._authMethodLoginName;
  }
  public set authMethodLoginName(value: string | undefined) {
    this._authMethodLoginName = value;
  }
  public resetAuthMethodLoginName() {
    this._authMethodLoginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodLoginNameInput() {
    return this._authMethodLoginName;
  }

  // auth_method_password - computed: false, optional: true, required: false
  private _authMethodPassword?: string; 
  public get authMethodPassword() {
    return this._authMethodPassword;
  }
  public set authMethodPassword(value: string | undefined) {
    this._authMethodPassword = value;
  }
  public resetAuthMethodPassword() {
    this._authMethodPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodPasswordInput() {
    return this._authMethodPassword;
  }

  // password_auth_method_login_name - computed: false, optional: true, required: false
  private _passwordAuthMethodLoginName?: string; 
  public get passwordAuthMethodLoginName() {
    return this._passwordAuthMethodLoginName;
  }
  public set passwordAuthMethodLoginName(value: string | undefined) {
    this._passwordAuthMethodLoginName = value;
  }
  public resetPasswordAuthMethodLoginName() {
    this._passwordAuthMethodLoginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthMethodLoginNameInput() {
    return this._passwordAuthMethodLoginName;
  }

  // password_auth_method_password - computed: false, optional: true, required: false
  private _passwordAuthMethodPassword?: string; 
  public get passwordAuthMethodPassword() {
    return this._passwordAuthMethodPassword;
  }
  public set passwordAuthMethodPassword(value: string | undefined) {
    this._passwordAuthMethodPassword = value;
  }
  public resetPasswordAuthMethodPassword() {
    this._passwordAuthMethodPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthMethodPasswordInput() {
    return this._passwordAuthMethodPassword;
  }

  // plugin_execution_dir - computed: false, optional: true, required: false
  private _pluginExecutionDir?: string; 
  public get pluginExecutionDir() {
    return this._pluginExecutionDir;
  }
  public set pluginExecutionDir(value: string | undefined) {
    this._pluginExecutionDir = value;
  }
  public resetPluginExecutionDir() {
    this._pluginExecutionDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginExecutionDirInput() {
    return this._pluginExecutionDir;
  }

  // recovery_kms_hcl - computed: false, optional: true, required: false
  private _recoveryKmsHcl?: string; 
  public get recoveryKmsHcl() {
    return this._recoveryKmsHcl;
  }
  public set recoveryKmsHcl(value: string | undefined) {
    this._recoveryKmsHcl = value;
  }
  public resetRecoveryKmsHcl() {
    this._recoveryKmsHcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryKmsHclInput() {
    return this._recoveryKmsHcl;
  }

  // scope_id - computed: false, optional: true, required: false
  private _scopeId?: string; 
  public get scopeId() {
    return this._scopeId;
  }
  public set scopeId(value: string | undefined) {
    this._scopeId = value;
  }
  public resetScopeId() {
    this._scopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // tls_insecure - computed: false, optional: true, required: false
  private _tlsInsecure?: boolean | cdktf.IResolvable; 
  public get tlsInsecure() {
    return this._tlsInsecure;
  }
  public set tlsInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsInsecure = value;
  }
  public resetTlsInsecure() {
    this._tlsInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInsecureInput() {
    return this._tlsInsecure;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr: cdktf.stringToTerraform(this._addr),
      auth_method_id: cdktf.stringToTerraform(this._authMethodId),
      auth_method_login_name: cdktf.stringToTerraform(this._authMethodLoginName),
      auth_method_password: cdktf.stringToTerraform(this._authMethodPassword),
      password_auth_method_login_name: cdktf.stringToTerraform(this._passwordAuthMethodLoginName),
      password_auth_method_password: cdktf.stringToTerraform(this._passwordAuthMethodPassword),
      plugin_execution_dir: cdktf.stringToTerraform(this._pluginExecutionDir),
      recovery_kms_hcl: cdktf.stringToTerraform(this._recoveryKmsHcl),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      tls_insecure: cdktf.booleanToTerraform(this._tlsInsecure),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr: {
        value: cdktf.stringToHclTerraform(this._addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_method_id: {
        value: cdktf.stringToHclTerraform(this._authMethodId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_method_login_name: {
        value: cdktf.stringToHclTerraform(this._authMethodLoginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_method_password: {
        value: cdktf.stringToHclTerraform(this._authMethodPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_auth_method_login_name: {
        value: cdktf.stringToHclTerraform(this._passwordAuthMethodLoginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_auth_method_password: {
        value: cdktf.stringToHclTerraform(this._passwordAuthMethodPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_execution_dir: {
        value: cdktf.stringToHclTerraform(this._pluginExecutionDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_kms_hcl: {
        value: cdktf.stringToHclTerraform(this._recoveryKmsHcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_id: {
        value: cdktf.stringToHclTerraform(this._scopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_insecure: {
        value: cdktf.booleanToHclTerraform(this._tlsInsecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
