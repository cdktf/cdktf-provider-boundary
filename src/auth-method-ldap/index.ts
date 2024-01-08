/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthMethodLdapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account attribute maps fullname and email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#account_attribute_maps AuthMethodLdap#account_attribute_maps}
  */
  readonly accountAttributeMaps?: string[];
  /**
  * Use anon bind when performing LDAP group searches (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#anon_group_search AuthMethodLdap#anon_group_search}
  */
  readonly anonGroupSearch?: boolean | cdktf.IResolvable;
  /**
  * The distinguished name of entry to bind when performing user and group searches (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#bind_dn AuthMethodLdap#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * The password to use along with bind-dn performing user and group searches (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#bind_password AuthMethodLdap#bind_password}
  */
  readonly bindPassword?: string;
  /**
  * The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#bind_password_hmac AuthMethodLdap#bind_password_hmac}
  */
  readonly bindPasswordHmac?: string;
  /**
  * PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#certificates AuthMethodLdap#certificates}
  */
  readonly certificates?: string[];
  /**
  * PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#client_certificate AuthMethodLdap#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#client_certificate_key AuthMethodLdap#client_certificate_key}
  */
  readonly clientCertificateKey?: string;
  /**
  * The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#client_certificate_key_hmac AuthMethodLdap#client_certificate_key_hmac}
  */
  readonly clientCertificateKeyHmac?: string;
  /**
  * Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#dereference_aliases AuthMethodLdap#dereference_aliases}
  */
  readonly dereferenceAliases?: string;
  /**
  * The auth method description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#description AuthMethodLdap#description}
  */
  readonly description?: string;
  /**
  * Use anon bind to discover the bind DN of a user (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#discover_dn AuthMethodLdap#discover_dn}
  */
  readonly discoverDn?: boolean | cdktf.IResolvable;
  /**
  * Find the authenticated user's groups during authentication (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#enable_groups AuthMethodLdap#enable_groups}
  */
  readonly enableGroups?: boolean | cdktf.IResolvable;
  /**
  * The attribute that enumerates a user's group membership from entries returned by a group search (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#group_attr AuthMethodLdap#group_attr}
  */
  readonly groupAttr?: string;
  /**
  * The base DN under which to perform group search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#group_dn AuthMethodLdap#group_dn}
  */
  readonly groupDn?: string;
  /**
  * A go template used to construct a LDAP group search filter (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#group_filter AuthMethodLdap#group_filter}
  */
  readonly groupFilter?: string;
  /**
  * Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#insecure_tls AuthMethodLdap#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * When true, makes this auth method the primary auth method for the scope in which it resides. The primary auth method for a scope means the the user will be automatically created when they login using an LDAP account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#is_primary_for_scope AuthMethodLdap#is_primary_for_scope}
  */
  readonly isPrimaryForScope?: boolean | cdktf.IResolvable;
  /**
  * MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#maximum_page_size AuthMethodLdap#maximum_page_size}
  */
  readonly maximumPageSize?: number;
  /**
  * The auth method name. Defaults to the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#name AuthMethodLdap#name}
  */
  readonly name?: string;
  /**
  * The scope ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#scope_id AuthMethodLdap#scope_id}
  */
  readonly scopeId: string;
  /**
  * Issue StartTLS command after connecting (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#start_tls AuthMethodLdap#start_tls}
  */
  readonly startTls?: boolean | cdktf.IResolvable;
  /**
  * Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#state AuthMethodLdap#state}
  */
  readonly state?: string;
  /**
  * The type of auth method; hardcoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#type AuthMethodLdap#type}
  */
  readonly type?: string;
  /**
  * The userPrincipalDomain used to construct the UPN string for the authenticating user (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#upn_domain AuthMethodLdap#upn_domain}
  */
  readonly upnDomain?: string;
  /**
  * The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#urls AuthMethodLdap#urls}
  */
  readonly urls?: string[];
  /**
  * Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#use_token_groups AuthMethodLdap#use_token_groups}
  */
  readonly useTokenGroups?: boolean | cdktf.IResolvable;
  /**
  * The attribute on user entry matching the username passed when authenticating (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#user_attr AuthMethodLdap#user_attr}
  */
  readonly userAttr?: string;
  /**
  * The base DN under which to perform user search (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#user_dn AuthMethodLdap#user_dn}
  */
  readonly userDn?: string;
  /**
  * A go template used to construct a LDAP user search filter (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#user_filter AuthMethodLdap#user_filter}
  */
  readonly userFilter?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap boundary_auth_method_ldap}
*/
export class AuthMethodLdap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_auth_method_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthMethodLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthMethodLdap to import
  * @param importFromId The id of the existing AuthMethodLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthMethodLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "boundary_auth_method_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap boundary_auth_method_ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthMethodLdapConfig
  */
  public constructor(scope: Construct, id: string, config: AuthMethodLdapConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_auth_method_ldap',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.11',
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
    this._accountAttributeMaps = config.accountAttributeMaps;
    this._anonGroupSearch = config.anonGroupSearch;
    this._bindDn = config.bindDn;
    this._bindPassword = config.bindPassword;
    this._bindPasswordHmac = config.bindPasswordHmac;
    this._certificates = config.certificates;
    this._clientCertificate = config.clientCertificate;
    this._clientCertificateKey = config.clientCertificateKey;
    this._clientCertificateKeyHmac = config.clientCertificateKeyHmac;
    this._dereferenceAliases = config.dereferenceAliases;
    this._description = config.description;
    this._discoverDn = config.discoverDn;
    this._enableGroups = config.enableGroups;
    this._groupAttr = config.groupAttr;
    this._groupDn = config.groupDn;
    this._groupFilter = config.groupFilter;
    this._insecureTls = config.insecureTls;
    this._isPrimaryForScope = config.isPrimaryForScope;
    this._maximumPageSize = config.maximumPageSize;
    this._name = config.name;
    this._scopeId = config.scopeId;
    this._startTls = config.startTls;
    this._state = config.state;
    this._type = config.type;
    this._upnDomain = config.upnDomain;
    this._urls = config.urls;
    this._useTokenGroups = config.useTokenGroups;
    this._userAttr = config.userAttr;
    this._userDn = config.userDn;
    this._userFilter = config.userFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_attribute_maps - computed: false, optional: true, required: false
  private _accountAttributeMaps?: string[]; 
  public get accountAttributeMaps() {
    return this.getListAttribute('account_attribute_maps');
  }
  public set accountAttributeMaps(value: string[]) {
    this._accountAttributeMaps = value;
  }
  public resetAccountAttributeMaps() {
    this._accountAttributeMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAttributeMapsInput() {
    return this._accountAttributeMaps;
  }

  // anon_group_search - computed: false, optional: true, required: false
  private _anonGroupSearch?: boolean | cdktf.IResolvable; 
  public get anonGroupSearch() {
    return this.getBooleanAttribute('anon_group_search');
  }
  public set anonGroupSearch(value: boolean | cdktf.IResolvable) {
    this._anonGroupSearch = value;
  }
  public resetAnonGroupSearch() {
    this._anonGroupSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonGroupSearchInput() {
    return this._anonGroupSearch;
  }

  // bind_dn - computed: false, optional: true, required: false
  private _bindDn?: string; 
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }
  public set bindDn(value: string) {
    this._bindDn = value;
  }
  public resetBindDn() {
    this._bindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnInput() {
    return this._bindDn;
  }

  // bind_password - computed: false, optional: true, required: false
  private _bindPassword?: string; 
  public get bindPassword() {
    return this.getStringAttribute('bind_password');
  }
  public set bindPassword(value: string) {
    this._bindPassword = value;
  }
  public resetBindPassword() {
    this._bindPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordInput() {
    return this._bindPassword;
  }

  // bind_password_hmac - computed: true, optional: true, required: false
  private _bindPasswordHmac?: string; 
  public get bindPasswordHmac() {
    return this.getStringAttribute('bind_password_hmac');
  }
  public set bindPasswordHmac(value: string) {
    this._bindPasswordHmac = value;
  }
  public resetBindPasswordHmac() {
    this._bindPasswordHmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordHmacInput() {
    return this._bindPasswordHmac;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates?: string[]; 
  public get certificates() {
    return this.getListAttribute('certificates');
  }
  public set certificates(value: string[]) {
    this._certificates = value;
  }
  public resetCertificates() {
    this._certificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_certificate_key - computed: false, optional: true, required: false
  private _clientCertificateKey?: string; 
  public get clientCertificateKey() {
    return this.getStringAttribute('client_certificate_key');
  }
  public set clientCertificateKey(value: string) {
    this._clientCertificateKey = value;
  }
  public resetClientCertificateKey() {
    this._clientCertificateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateKeyInput() {
    return this._clientCertificateKey;
  }

  // client_certificate_key_hmac - computed: true, optional: true, required: false
  private _clientCertificateKeyHmac?: string; 
  public get clientCertificateKeyHmac() {
    return this.getStringAttribute('client_certificate_key_hmac');
  }
  public set clientCertificateKeyHmac(value: string) {
    this._clientCertificateKeyHmac = value;
  }
  public resetClientCertificateKeyHmac() {
    this._clientCertificateKeyHmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateKeyHmacInput() {
    return this._clientCertificateKeyHmac;
  }

  // dereference_aliases - computed: true, optional: true, required: false
  private _dereferenceAliases?: string; 
  public get dereferenceAliases() {
    return this.getStringAttribute('dereference_aliases');
  }
  public set dereferenceAliases(value: string) {
    this._dereferenceAliases = value;
  }
  public resetDereferenceAliases() {
    this._dereferenceAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dereferenceAliasesInput() {
    return this._dereferenceAliases;
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

  // discover_dn - computed: false, optional: true, required: false
  private _discoverDn?: boolean | cdktf.IResolvable; 
  public get discoverDn() {
    return this.getBooleanAttribute('discover_dn');
  }
  public set discoverDn(value: boolean | cdktf.IResolvable) {
    this._discoverDn = value;
  }
  public resetDiscoverDn() {
    this._discoverDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverDnInput() {
    return this._discoverDn;
  }

  // enable_groups - computed: false, optional: true, required: false
  private _enableGroups?: boolean | cdktf.IResolvable; 
  public get enableGroups() {
    return this.getBooleanAttribute('enable_groups');
  }
  public set enableGroups(value: boolean | cdktf.IResolvable) {
    this._enableGroups = value;
  }
  public resetEnableGroups() {
    this._enableGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGroupsInput() {
    return this._enableGroups;
  }

  // group_attr - computed: false, optional: true, required: false
  private _groupAttr?: string; 
  public get groupAttr() {
    return this.getStringAttribute('group_attr');
  }
  public set groupAttr(value: string) {
    this._groupAttr = value;
  }
  public resetGroupAttr() {
    this._groupAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttrInput() {
    return this._groupAttr;
  }

  // group_dn - computed: false, optional: true, required: false
  private _groupDn?: string; 
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }
  public set groupDn(value: string) {
    this._groupDn = value;
  }
  public resetGroupDn() {
    this._groupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDnInput() {
    return this._groupDn;
  }

  // group_filter - computed: false, optional: true, required: false
  private _groupFilter?: string; 
  public get groupFilter() {
    return this.getStringAttribute('group_filter');
  }
  public set groupFilter(value: string) {
    this._groupFilter = value;
  }
  public resetGroupFilter() {
    this._groupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFilterInput() {
    return this._groupFilter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insecure_tls - computed: false, optional: true, required: false
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktf.IResolvable) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
  }

  // is_primary_for_scope - computed: false, optional: true, required: false
  private _isPrimaryForScope?: boolean | cdktf.IResolvable; 
  public get isPrimaryForScope() {
    return this.getBooleanAttribute('is_primary_for_scope');
  }
  public set isPrimaryForScope(value: boolean | cdktf.IResolvable) {
    this._isPrimaryForScope = value;
  }
  public resetIsPrimaryForScope() {
    this._isPrimaryForScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryForScopeInput() {
    return this._isPrimaryForScope;
  }

  // maximum_page_size - computed: false, optional: true, required: false
  private _maximumPageSize?: number; 
  public get maximumPageSize() {
    return this.getNumberAttribute('maximum_page_size');
  }
  public set maximumPageSize(value: number) {
    this._maximumPageSize = value;
  }
  public resetMaximumPageSize() {
    this._maximumPageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPageSizeInput() {
    return this._maximumPageSize;
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

  // scope_id - computed: false, optional: false, required: true
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // start_tls - computed: false, optional: true, required: false
  private _startTls?: boolean | cdktf.IResolvable; 
  public get startTls() {
    return this.getBooleanAttribute('start_tls');
  }
  public set startTls(value: boolean | cdktf.IResolvable) {
    this._startTls = value;
  }
  public resetStartTls() {
    this._startTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsInput() {
    return this._startTls;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // upn_domain - computed: false, optional: true, required: false
  private _upnDomain?: string; 
  public get upnDomain() {
    return this.getStringAttribute('upn_domain');
  }
  public set upnDomain(value: string) {
    this._upnDomain = value;
  }
  public resetUpnDomain() {
    this._upnDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upnDomainInput() {
    return this._upnDomain;
  }

  // urls - computed: false, optional: true, required: false
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // use_token_groups - computed: false, optional: true, required: false
  private _useTokenGroups?: boolean | cdktf.IResolvable; 
  public get useTokenGroups() {
    return this.getBooleanAttribute('use_token_groups');
  }
  public set useTokenGroups(value: boolean | cdktf.IResolvable) {
    this._useTokenGroups = value;
  }
  public resetUseTokenGroups() {
    this._useTokenGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTokenGroupsInput() {
    return this._useTokenGroups;
  }

  // user_attr - computed: false, optional: true, required: false
  private _userAttr?: string; 
  public get userAttr() {
    return this.getStringAttribute('user_attr');
  }
  public set userAttr(value: string) {
    this._userAttr = value;
  }
  public resetUserAttr() {
    this._userAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttrInput() {
    return this._userAttr;
  }

  // user_dn - computed: false, optional: true, required: false
  private _userDn?: string; 
  public get userDn() {
    return this.getStringAttribute('user_dn');
  }
  public set userDn(value: string) {
    this._userDn = value;
  }
  public resetUserDn() {
    this._userDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDnInput() {
    return this._userDn;
  }

  // user_filter - computed: false, optional: true, required: false
  private _userFilter?: string; 
  public get userFilter() {
    return this.getStringAttribute('user_filter');
  }
  public set userFilter(value: string) {
    this._userFilter = value;
  }
  public resetUserFilter() {
    this._userFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFilterInput() {
    return this._userFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_attribute_maps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountAttributeMaps),
      anon_group_search: cdktf.booleanToTerraform(this._anonGroupSearch),
      bind_dn: cdktf.stringToTerraform(this._bindDn),
      bind_password: cdktf.stringToTerraform(this._bindPassword),
      bind_password_hmac: cdktf.stringToTerraform(this._bindPasswordHmac),
      certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificates),
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      client_certificate_key: cdktf.stringToTerraform(this._clientCertificateKey),
      client_certificate_key_hmac: cdktf.stringToTerraform(this._clientCertificateKeyHmac),
      dereference_aliases: cdktf.stringToTerraform(this._dereferenceAliases),
      description: cdktf.stringToTerraform(this._description),
      discover_dn: cdktf.booleanToTerraform(this._discoverDn),
      enable_groups: cdktf.booleanToTerraform(this._enableGroups),
      group_attr: cdktf.stringToTerraform(this._groupAttr),
      group_dn: cdktf.stringToTerraform(this._groupDn),
      group_filter: cdktf.stringToTerraform(this._groupFilter),
      insecure_tls: cdktf.booleanToTerraform(this._insecureTls),
      is_primary_for_scope: cdktf.booleanToTerraform(this._isPrimaryForScope),
      maximum_page_size: cdktf.numberToTerraform(this._maximumPageSize),
      name: cdktf.stringToTerraform(this._name),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      start_tls: cdktf.booleanToTerraform(this._startTls),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
      upn_domain: cdktf.stringToTerraform(this._upnDomain),
      urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
      use_token_groups: cdktf.booleanToTerraform(this._useTokenGroups),
      user_attr: cdktf.stringToTerraform(this._userAttr),
      user_dn: cdktf.stringToTerraform(this._userDn),
      user_filter: cdktf.stringToTerraform(this._userFilter),
    };
  }
}
